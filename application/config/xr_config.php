<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| Google Analitics API
|--------------------------------------------------------------------------
|
*/
$config['API_KEY']  = 'AIzaSyANHbMDBRuq8w5lxN1b4cNeB8WSULDhqN0';
$config['CLIENT_ID']= '635100981239.apps.googleusercontent.com';
$config['TABLE_ID'] = 'ga:74421519';
$config['DAYS']     = '30';

/*
|--------------------------------------------------------------------------
| Login Facebook API
|--------------------------------------------------------------------------
|
*/
$config['appId']   = '832622043449344';
$config['secret']  = '4b4f67ea58710e08698c4d2d4212d2f5';

$config['facebook_app_id']   = '832622043449344';
$config['facebook_app_secret']  = '4b4f67ea58710e08698c4d2d4212d2f5';

/*
|--------------------------------------------------------------------------
| Security settings
|
| The library uses PasswordHash library for operating with hashed passwords.
| 'phpass_hash_portable' = Can passwords be dumped and exported to another server. If set to FALSE then you won't be able to use this database on another server.
| 'phpass_hash_strength' = Password hash strength.
|--------------------------------------------------------------------------
*/
$config['phpass_hash_portable'] = FALSE;
$config['phpass_hash_strength'] = 8;
$config['login_cms_base_url'] = 'cms/login';
$config['cms_email_info'] = 'info@realxperience.com';
$config['cms_email_from'] = 'Ciklo';
$config['login_cms_base_url'] = 'cms/login';
$config['auth_expire_period'] = '216000';
$config['login_base_url'] = 'login';

/*
|--------------------------------------------------------------------------
| Email config
|--------------------------------------------------------------------------
|
| You need to set all vars to send emails
|
*/
$config['website_email']            = 'info@realxperience.com';
$config['website_name']             = 'Real Xperience';
$config['website_short_name']       = 'Rx';


/*
|--------------------------------------------------------------------------
| General
|--------------------------------------------------------------------------
|
*/

$config['total_rows_table'] = 10;

$config['google_custom_search'] = '013916729877039214208:ymya0anmeoi';
$config['empty_image'] = 'assets/img/styles/img-not-found.png';
$config['image_type'] = 'gif|jpg|jpeg|png';
$config['404_location'] = 'error';

/*
|--------------------------------------------------------------------------
| Facebook like
|--------------------------------------------------------------------------
|
*/

$config['facebook_like'] = 'http://www.facebook.com/Guate360';

/*
 |--------------------------------------------------------------------------
 | reCaptcha API
 |--------------------------------------------------------------------------
 |
 */

$config['recaptcha_public_key'] = '6LdSZwITAAAAAB083pNEbZcYv21Mm4upMmQnUX_d';
$config['recaptcha_private_key'] = '6LdSZwITAAAAAKck4r2oC8Dj_oyj6lbN3XOTrd1J';

/*
|--------------------------------------------------------------------------
| Twitter Login
|--------------------------------------------------------------------------
|
*/

$config['consumer_key']       = '5CZmEJQBMwU8wNvnbHgXWZNBu';
$config['consumer_secret']    = 'wSMvcg5hFt2eBMAfLYyPvsghXqIE5Mj5MT9W5PHja5ojixcz1L';
$config['access_token']    = '2815371600-bB2Jige89qpPrRBk2u2SWq102T4ccKMDKSdGZXy';
$config['access_token_secret']    = ' HJ7MuP1MIcGLo3IBRsE8ofvhEnmKozhcIsmaMka4iWWOv';
$config['oauth_callback']     = 'login';

/*
|--------------------------------------------------------------------------
| Twitter Login
|--------------------------------------------------------------------------
|
*/

$config['share_consumer_key'] = '8q5sB7oceIS5vySaPPZvIEoJq';
$config['share_consumer_secret'] = 'Jf9ubLEzaVF9dYUE52fFMlnGXpE3FPBbDCFlCxOQu6QtK2k8Vl';
$config['share_access_token'] = '2815371600-7d2kIrcfs8hPpoG4xXtxHfcyqGw83RI2AFz8h23';
$config['share_access_token_secret'] = 'AR8FbbdjeUSjp5NwpnaMXFsMlhM62UP3Jj66tbafieiKI';

/*
|--------------------------------------------------------------------------
| Google coordinate default
|--------------------------------------------------------------------------
|
*/
 
$config['map_lat'] = '14.588066';
$config['map_lng'] = '-90.504106';
$config['api_key'] = 'AIzaSyANHbMDBRuq8w5lxN1b4cNeB8WSULDhqN0';
$config['google_country_default']  = 'guatemala guatemala ';
$config['google_map_multiplier']  = '112.12'; // kilometers use 69.0467669 if you want miles
$config['google_map_distance']  = '10'; // kilometers or miles if 69.0467669
$config['google_map_radius']  = '6378.137'; // earth mean radius defined by WGS84

/*
|--------------------------------------------------------------------------
| Limit nearest prividers
|--------------------------------------------------------------------------
|
*/

$config['providers_limit'] = '20';
$config['providers_time_to_wait_limit'] = '30';
$config['providers_time_limit'] = '1200';

/*
|--------------------------------------------------------------------------
| Limit for requests
|--------------------------------------------------------------------------
|
*/

$config['requests_limit'] = '5000';

/*
|--------------------------------------------------------------------------
| Limit rating
|--------------------------------------------------------------------------
|
*/

$config['rating_limit'] = '2';
$config['rating_num_limit'] = '10';

/*
|--------------------------------------------------------------------------
| Congig Share settings
|--------------------------------------------------------------------------
|
*/

$config['share_title'] = 'Ciklo';
$config['share_url'] = 'www.grupopremiere.com';
$config['share_url_maps'] = 'https://www.google.com.gt/maps/dir/';
$config['share_icon'] = 'http://ciklo.com/uploads/3/5/5/9/3559989/1377562_orig.jpg';


/*
|--------------------------------------------------------------------------
| Congig web client section prefix
|--------------------------------------------------------------------------
|
*/

$config['client_prefix'] = 'webcl/';

/* End of file gp_config.php */
/* Location: ./application/config/gp_config.php */
