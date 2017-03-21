<?php

namespace CommandRestBundle\Command;

use Sensio\Bundle\GeneratorBundle\Command\Validators;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\Console\Formatter\OutputFormatterStyle;

class GenerateCrudRestCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            // the name of the command (the part after "bin/console")
            ->setName('doctrine:generate:crud:rest')
            // the short description shown while running "php bin/console list"
            ->setDescription('Generates a CRUD REST based on a Doctrine entity')
            ->addArgument('entity', InputArgument::REQUIRED, 'The entity class name to initialize (shortcut notation)')
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

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $entity = Validators::validateEntityName($input->getArgument('entity'));

        list($bundle, $entity) = $this->parseShortcutNotation($entity);

        $helper = $this->getHelper('question');
        $defaultEntityNameInPlurial = strtolower($entity) . 's';
        $question = new Question("Renseignez le nom de l'entity au pluriels. [{$defaultEntityNameInPlurial}] : ", $defaultEntityNameInPlurial);
        $entityNameInPlurial = $helper->ask($input, $output, $question);

        $this->renderFile('CommandRestBundle:Command:controller.php.twig', 'src/'.$bundle.'/Controller/Api/'. $entity . 'Controller.php', [
            'bundle' => $bundle,
            'entity' => $entity,
            'entities' => $entityNameInPlurial,
        ]);
        $style = new OutputFormatterStyle('red', 'yellow', array('bold', 'blink'));
        $output->getFormatter()->setStyle('fire', $style);
        $output->writeln('<fire>Controller Rest created</fire>');

    }

    protected function parseShortcutNotation($shortcut)
    {
        $entity = str_replace('/', '\\', $shortcut);

        if (false === $pos = strpos($entity, ':')) {
            throw new \InvalidArgumentException(sprintf('The entity name must contain a : ("%s" given, expecting something like AcmeBlogBundle:Blog/Post)', $entity));
        }

        return array(substr($entity, 0, $pos), substr($entity, $pos + 1));
    }

    protected function renderFile($template, $target, $parameters)
    {
        if (!is_dir(dirname($target))) {
            mkdir(dirname($target), 0777, true);
        }

        return file_put_contents($target, $this->getContainer()->get('templating')->render($template, $parameters));
    }

}