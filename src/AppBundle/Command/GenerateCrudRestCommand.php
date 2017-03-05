<?php

namespace AppBundle\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class GenerateCrudRestCommand extends Command
{
    protected function configure()
    {
        $this
            // the name of the command (the part after "bin/console")
            ->setName('doctrine:generate:crud:rest')
            // the short description shown while running "php bin/console list"
            ->setDescription('Generates a CRUD REST based on a Doctrine entity')
            // the full command description shown when running the command with
            // the "--help" option
            ->setHelp(<<<EOT
The <info>%command.name%</info> command generates a CRUD REST based on a Doctrine entity.

The default command only generates the list and show actions.

<info>php %command.full_name% --entity=AcmeBlogBundle:Post --route-prefix=post_admin</info>

Using the --with-write option allows to generate the new, edit and delete actions.

<info>php %command.full_name% --entity=AcmeBlogBundle:Post --route-prefix=post_admin --with-write</info>

Every generated file is based on a template. There are default templates but they can be overridden by placing custom templates in one of the following locations, by order of priority:

EOT
            )
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // outputs multiple lines to the console (adding "\n" at the end of each line)
        $output->writeln([
            'My First Symfony command',// A line
            '============',// Another line
            '',// Empty line
        ]);

        // outputs a message followed by a "\n"
        $output->writeln('Hey welcome to the test command wizard.');
        $output->writeln('Thanks for read the article');

        // outputs a message without adding a "\n" at the end of the line
        $output->write("You've succesfully implemented your first command");
    }
}