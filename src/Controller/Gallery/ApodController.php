<?php

namespace App\Controller\Gallery;

use App\Entity\Apod;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApodController extends AbstractController
{
    protected $parameterBag;

    public function __construct(ParameterBagInterface $parameterBag)
    {
        $this->parameterBag = $parameterBag;

    }

    #[Route('/pod', name: 'app_apod')]
    public function index(EntityManagerInterface $entityManager, Request $request): Response
    {

        // Affichage de la dernière pod
        $month_List = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

        // $month_List = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Nomvembre", "Décembre"];
        date_default_timezone_set('UTC');
        // creation du formulaire pour rechercher une pod a partir d'une date
        $form = $this->createFormBuilder()
            ->add('date', DateType::class, [
                'widget' => 'single_text',
                'input'  => 'array',
            ])
            ->getForm();
        ;


        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $date = $form->getData();
            $requested_date = $date['date']['year']."-".$date['date']['month']."-".$date['date']['day'];

            if($requested_date <= "1995-6-16" || $requested_date >= "2023-10-23"){
                $apod = $entityManager->getRepository(Apod::class)->findOneBy([], ['id' => 'desc']);
                $formatedMonth = $apod->getMonth() -1 ;
                $formatedMonth = $month_List[$formatedMonth];
            } else {
                $apod = $entityManager->getRepository(Apod::class)->findOneBy(["FullDate" => $requested_date]);
                $formatedMonth = $apod->getMonth() -1 ;
                $formatedMonth = $month_List[$formatedMonth];
            }

        } else {
            $apod = $entityManager->getRepository(Apod::class)->findOneBy([], ['id' => 'desc']);
            $formatedMonth = $apod->getMonth() -1 ;
            $formatedMonth = $month_List[$formatedMonth];
        }

        return $this->render('gallery/Apod.html.twig', [
            'form' => $form->createView(),
            'day' =>$apod->getDay(),
            'month' => $formatedMonth,
            'year' =>$apod->getYear(),
            'apod' => $apod,
            'controller_name' => 'ApodController',
        ]);
    }
}
