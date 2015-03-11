<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 *
 * Send email in login form
 * @param unknown_type $view
 * @param unknown_type $subject
 * @param unknown_type $email
 * @param unknown_type $data
 * @param unknown_type $attach
 * @autor Abner Tellez
 * @date May 15, 2014
 */

if(!function_exists('send_standar_email')) {
    function send_standar_email($view, $subject, $email, &$data, $attach = FALSE) {
        $CI =& get_instance();

        $CI->load->library('email');

        $config['mailtype'] = 'html';
        $config['charset'] = 'utf-8';
        $CI->email->initialize($config);
        $CI->load->config('gp_config');

        $CI->email->from($CI->config->item('website_email'), $CI->config->item('website_name'));
        $CI->email->to($email);
        $CI->email->subject($subject);
        $CI->email->message($CI->load->view($view, $data,TRUE));

        if($attach){
            if(!empty($attach)){
                foreach($attach as $file){
                    $CI->email->attach($file);
                }
            }
        }

        if ($CI->email->send()) {
            return true;
        } else {
            return false;
        }
    }
}

// ------------------------------------------------------------------------

/* End of file xr_email_helper.php */
/* Location: ./application/helpers/xr_email_helper.php */
