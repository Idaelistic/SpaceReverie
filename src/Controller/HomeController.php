<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mime\Email;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    #[Route('/test', name: 'app_test')]
    public function test(MailerInterface $mailer): Response
    {
        $email = (new Email())
            ->from('hello@example.com')
            ->to("coucou@example.com")
            ->subject('Verify your email on Cauldron Overflow!')
            ->text('Please, follow the link to verify your email!')
            ->html(sprintf('Coucoucuocuidsqufiop'));
        $mailer->send($email);

        return $this->render('index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
