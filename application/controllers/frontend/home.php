<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

    public function __construct() {
        parent::__construct();
        
    }

    /**
     *
     * Login controller.
     * 
     */
    
    public function index() {

        $data['title_page'] = 'home';
        $data['main_content'] = 'frontend/home';
        $this->load->view('templates/template', $data);
    }
}

/* End of file login.php */
/* Location: ./application/controllers/login.php */
