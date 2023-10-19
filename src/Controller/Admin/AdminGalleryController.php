<?php

namespace App\Controller\Admin;

use App\Entity\Apod;
use Doctrine\ORM\EntityManagerInterface;
use \Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminGalleryController extends AbstractController
{
    protected $parameterBag;

    public function __construct(ParameterBagInterface $parameterBag)
    {
        $this->parameterBag = $parameterBag;

    }
    #[Route('/admin/gallery', name: 'app_admin_gallery')]
    public function index(EntityManagerInterface $entityManager, Request $request): Response
    {

        $dtd_form = $this->createFormBuilder()
            ->add('start_date', DateType::class, [
                'widget' => 'single_text',
                'input'  => 'array',

            ])
            ->add('end_date', DateType::class, [
                'widget' => 'single_text',
                'input'  => 'array',

            ])
            ->getForm();

        $dtd_form->handleRequest($request);
        if ($dtd_form->isSubmitted() && $dtd_form->isValid()) {

            $date = $dtd_form->getData();
            $start_date = $date['start_date'];
            $end_date = $date['end_date'];
            $month_List = ["1 - Janvier", "2 - Février", "3 - Mars", "4 - Avril", "5 - Mai", "6 - Juin", "7 - Juillet", "8 - Août", "9 - Septembre", "10 - Octobre", "11 - Nomvenbre", "12 - Décembre"];
            $date = array($start_date['year'], $start_date['month'], $start_date['day']);
            $date_fin = array($end_date['year'], $end_date['month'], $end_date['day']);
            $ApiKey = "R6ZpsXZl0Jqh9TgD3JnW8995o1NtDLDFg84ShjyR";

            while ($date != $date_fin) {
                sleep(1);
                list($year, $month, $day) = $date;

                if ($month == 12 && $day == 31) {
                    $year += 1;
                    $month = 1;
                    $day = 1;
                } elseif ($month == 2 && $day == 28) {
                    if (($year % 4 == 0 && $year % 100 != 0) || $year % 400 == 0) {
                        $month = 2;
                        $day = 29;
                    } else {
                        $month = 3;
                        $day = 1;
                    }
                } elseif ($month == 2 && $day == 29) {
                    $month = 3;
                    $day = 1;
                } elseif (in_array($month, array(4, 6, 9, 11)) && $day == 30) {
                    $month += 1;
                    $day = 1;
                } elseif ($day == 31) {
                    if ($month == 7) {
                        $month = 8;
                    } else {
                        $month += 1;
                    }
                    $day = 1;
                } else {
                    $day += 1;
                }

                $date = array($year, $month, $day);
                $month_name = $month - 1;
                $month_name = $month_List[$month_name];

                @mkdir("./APOD/".$year);
                @mkdir("./APOD/".$year."/".$month_name);
                $date_r = $date[0] . "-" . $date[1] . "-" . $date[2];


                // Open the file using the HTTP headers set above
                // request = file_get_contents('https://api.nasa.gov/planetary/apod?api_key='.$ApiKey.'&date='.$date_r, "rb");
                $url = 'https://api.nasa.gov/planetary/apod?api_key='.$ApiKey.'&date='.$date_r;
                $context = stream_context_create(array('http' => array('ignore_errors' => true)));
                $data = file_get_contents($url, false, $context);
                $response_code = substr($http_response_header[0], 9, 3);
                var_dump($response_code);
                if($response_code == "200") {
                    $request = json_decode($data, true);
                    $path = $this->parameterBag->get('kernel.project_dir')."/gallery/APOD/".$year."/".$month_name."/";

                    #Verification si les données existe (verification unique)

                    if (isset($request['copyright'])) { $copyright = $request['copyright']; } else { $copyright = "No copyright"; }
                    if (isset($request['title'])) { $title = $request['title']; } else { $title = "No title"; }
                    if (isset($request['explanation'])) { $explanation = $request['explanation']; } else { $explanation = "No explanation"; }
                    if (isset($request['date'])) { $date_pod = $request['date']; } else { $date_pod = "No date"; }
                    if (isset($request['url'])) { $url = $request['url']; } else { $url = ""; }
                    if (isset($request['hdurl'])) { $hdurl = $request['hdurl']; } else { $hdurl = ""; }
                    if (isset($request['media_type'])) { $media_type = $request['media_type']; } else { $media_type = "No type"; }

                    $search = array('/', ':', "\n", "\r", '*', '?', '<', '>', '"', '|');
                    $replace = array(' ', ',', '', '', '°', '', '','', '');

                    $formated_title = str_replace($search, $replace, $title);

                    $file = fopen($path.$day."-".$formated_title.".md", "w");
                    $ftitle = $title.",\n\n"; fwrite($file, $ftitle);
                    if ($media_type == "image") {
                        $fmedia = "[![Build Status](". $url .")](". $hdurl .")\n\n"; fwrite($file, $fmedia);
                    } elseif ($media_type == "video") {
                        $fmedia = "## Vidéo: ". $url . ", \n\n"; fwrite($file, $fmedia);
                    } elseif ($media_type == "other") {
                        $fmedia = "## No photo & No vidéo, \n\n"; fwrite($file, $fmedia);
                    }
                    $fcopyright = "Copyright: " . $copyright . ", \n\n"; fwrite($file, $fcopyright);
                    $fdate = "Date: ".$date_pod.",\n\n"; fwrite($file, $fdate);
                    $fexplanation = "Explanation: ".$explanation."\n\n"; fwrite($file, $fexplanation);
                    fclose($file);


                    $apod_check = $entityManager->getRepository(Apod::class)->findOneBy(['FullDate' => $date_r]);

                    if(!$apod_check) {
                        $apod = new Apod();

                        $apod->setTitle($title);
                        $apod->setCopyright($copyright);
                        $apod->setExplanation($explanation);
                        $apod->setUrl($url);
                        $apod->setHdurl($hdurl);
                        $apod->setMediaType($media_type);
                        $apod->setResponseCode($response_code);
                        $apod->setDay($day);
                        $apod->setMonth($month);
                        $apod->setYear($year);
                        $apod->setFullDate($date_r);
                        $entityManager->persist($apod);
                        $entityManager->flush();
                    }

                    echo $date_r . ": 👍" . "\n";
                } else {
                    echo "noo" . ": " . "\n";
                }



            }
        }

        return $this->render('admin/gallery.html.twig', [
            'form_dtd' => $dtd_form->createView(),
            'controller_name' => 'AdminGalleryController',
        ]);
    }
}
