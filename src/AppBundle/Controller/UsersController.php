<?php

    namespace AppBundle\Controller;

    use FOS\RestBundle\Controller\Annotations\Get;
    use FOS\RestBundle\Controller\FOSRestController;
    use Symfony\Component\HttpFoundation\Request;

    class UsersController extends FOSRestController
    {
        protected $users = [
            ['id' => 1, 'name' => 'Philippe Kévin'],
            ['id' => 2, 'name' => 'Jane Doe'],
            ['id' => 3, 'name' => 'Dupont Jean'],
            ['id' => 4, 'name' => 'Durand Bernard'],
        ];

        /**
         * @Get("/users", name="user-list")
         */
        public function indexAction (Request $request)
        {
            $view = $this->view(['data' => $this->users]);

            return $this->handleView($view);
        }

        /**
         * @Get("/users/{id}", name="user", requirements={"id" = "\d+"})
         */
        public function getAction (Request $request, int $id)
        {
            $users = array_filter($this->users, function ($u) use($id) {
                return $u['id'] === $id;
            });
            $user = reset($users);
            $view = $this->view(['data' => $user]);

            return $this->handleView($view);
        }
    }
