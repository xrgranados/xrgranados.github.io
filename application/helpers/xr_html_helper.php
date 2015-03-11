<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Script tag
 *
 * Generates a script inclusion of a JavaScript file
 * Based on the CodeIgniters original Link Tag.
 *
 * @access  public
 * @param   string  src
 * @param   string  language
 * @param   string  type
 * @param   string  index_page
 * @return  string
 */

if ( !function_exists('script_tag')) {
    function script_tag($src = '', $language = 'javascript', $type = 'text/javascript', $index_page = FALSE) {
        $CI =& get_instance();
        $script = '<script';
        if ( strpos($src, '://') !== FALSE) {
            $script .= ' src="'.$src.'" ';
        } elseif ($index_page === TRUE) {
            $script .= ' src="'.$CI->config->site_url($src).'" ';
        } else {
            $script .= ' src="'.$CI->config->slash_item('base_url').$src.'" ';
        }
        $script .= 'language="'.$language.'" type="'.$type.'"';
        $script .= '></script>'."\n";
        return $script;
    }
}

// ------------------------------------------------------------------------

/**
 * Gets traduction line from lang file
 *
 * If line not defined, returns a warning string
 *
 * @access  public
 * @param   string  language_key
 * @return  string
 * Date Apr 24, 2014
 * @autor edudeleon
 */

if ( !function_exists('lang')) {
    function lang($language_key="") {
        $CI = &get_instance();
        if($CI->lang->line($language_key)) {
            return $CI->lang->line($language_key);
        }
        return $CI->lang->line('text_not_defined');
    }
}

// ------------------------------------------------------------------------
if ( !function_exists('lang_arguments')) {
    /**
     *
     * Send var to language file ...
     * @param unknown_type $line
     * @param unknown_type $swap
     * @return mixed
     * @autor Maxim Feshchuk
     * @date May 23, 2014
     */
    function lang_arguments($line, $swap)
        {
            $CI = &get_instance();
            return str_replace('%s', $swap, $CI->lang->line($line));
        }
}
// ------------------------------------------------------------------------

/**
 * Gets config line from gp config file
 *
 * @access  public
 * @param   string  key
 * @return  string
 * Date Apr 24, 2014
 * @autor edudeleon
 */

if ( !function_exists('config_item')) {
    function config_item($key) {
        $CI = &get_instance();
        return $CI->config->item($key);
    }
}

// ------------------------------------------------------------------------

/**
 * For debbuging, use instead of print_r()
 *
 * @access  public
 * @param   string  key
 * @return  string
 * @autor Eduardo De Leon
 * Date 16/08/2013
 */
if ( !function_exists('pre')) {
    function pre() {
        $values = func_get_args();
        foreach($values as $val) {
            echo "<pre>";
            print_r($val);
            echo "</pre>";
        }
    }
}

// ------------------------------------------------------------------------


/**
 * Return a array element or $default value in case index is not set
 *
 * @access  public
 * @param   string  index
 * @param   array   array
 * @param   string  default
 * @return  string
 * @autor Eduardo De Leon
 * Date 3/09/2013
 */
if ( !function_exists('if_empty')) {
    function if_empty($index, &$array, $default="") {
        if(isset($array) && !empty($array[$index])) {
            return $array[$index];
        }
        return $default;
    }
}

// ------------------------------------------------------------------------


/**
 * Return a form textarea with all information needed
 *
 * @param string html
 * @param string filename
 * @param string stream
 * @return string
 */

if ( !function_exists('pdf_create')) {
    function pdf_create($html, $filename='', $stream=TRUE) {
        require_once(APPPATH."/libraries/dompdf/dompdf_config.inc.php");

        $dompdf = new DOMPDF();
        $dompdf->load_html($html);
        $dompdf->render();

        if ($stream) {
            $dompdf->stream($filename.".pdf");
        } else {
            return $dompdf->output();
        }
    }
}

/**
 *
 * Load constant file
 * @param unknown_type $file
 * @date May 21, 2014
 */

if (!function_exists('load_file_constants')) {

    function load_constant_file($file) {
        include ('./application/config/db_constants/' . $file . '.php');
    }

}

if (!function_exists('load_all_constants')) {

    function load_all_constants() {
        $file_array = scandir('./application/config/db_constants/');
        foreach ($file_array as $file) {
            if ($file != '.' && $file != '..') {
                include ('./application/config/db_constants/' . $file);
            }
        }
    }

}

// ------------------------------------------------------------------------

// ------------------------------------------------------------------------

/**
 *
 * Check if data empty
 *
 * @param unknown_type $data_check
 * @autor Maxim Feshchuk
 * @date May 28, 2014
 */

if ( !function_exists('if_data_empty')) {
    function if_data_empty($data_check, $url = FALSE) {
        $CI = &get_instance();

        if (empty($data_check)) {
            if (empty($url)) {
                $url = 'error';
            }
            $CI->session->set_flashdata('flash_message_frontend', $CI->lang->line('msg_error_data_not_founded'));
            redirect($url, 'location');
        }
    }
}

/**
 *
 * Check if any image is empty
 *
 * @autor Maxim Feshchuk
 * @date May 28, 2014
 */

if ( !function_exists('if_image_empty')) {
    function if_image_empty($img, $imagen) {
        $CI = &get_instance();

        if (empty($imagen)) {
            $img['src'] = config_item('empty_image');
            $img['alt'] = 'no image';
        }
        return $img;
    }
}

/**
 *
 * Pagination
 *
 * @autor Maxim Feshchuk
 * @date June 17, 2014
 */

if ( !function_exists('pagination')) {
    function pagination($uri_segment, $base_url, $total_rows, $limit) {
        $CI = &get_instance();

        //Pagination
        $config['uri_segment']              = $uri_segment;
        $config['base_url']                 = site_url($base_url);
        $config['num_links']                = config_item('num_links');
        $config['next_link']                = lang('next_pagination');
        $config['next_tag_open']            = '<div id="next_link">';
        $config['next_tag_open_disabled']   = '<div id="next_link" class="disabled">';
        $config['next_tag_close']           = '</div>';
        $config['prev_link']                = lang('previus_pagination');
        $config['prev_tag_open']            = '<div id="prev_link">';
        $config['prev_tag_open_disabled']   = '<div id="prev_link" class="disabled">';
        $config['prev_tag_close']           = '</div>';
        $config['full_tag_open']            = '<div id="all_links">';
        $config['full_tag_close']           = '</div>';
        $config['first_link']               = FALSE;
        $config['last_link']                = FALSE;
        $config['total_rows']               = $total_rows;
        $config['per_page']                 = $limit;

        $CI->pagination->initialize($config);
        $pagination = $CI->pagination->create_links();

        return $pagination;
    }
}

// ------------------------------------------------------------------------

/* End of file gp_html_helper.php */
/* Location: ./application/helpers/gp_html_helper.php */
