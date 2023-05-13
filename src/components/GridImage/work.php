<?php 
	global $etheme_responsive; 
	$fd = etheme_get_option('footer_demo'); 	
	$fbg = etheme_get_option('footer_bg');
	$fcolor = etheme_get_option('footer_text_color');
	$ft = ''; $ft = apply_filters('custom_footer_filter',$ft);
	$custom_footer = etheme_get_custom_field('custom_footer', et_get_page_id()); 
?>
    
    <?php if($custom_footer != 'without'): ?>
		<?php if((is_active_sidebar('footer1') || $fd) && empty($custom_footer)): ?>
			<div class="footer-top footer-top-<?php echo esc_attr($ft); ?>">
				<div class="container">
	                <?php if ( !is_active_sidebar( 'footer1' ) ) : ?>
	               		<?php if($fd) etheme_footer_demo('footer1'); ?>
	                <?php else: ?>
	                    <?php dynamic_sidebar( 'footer1' ); ?>
	                <?php endif; ?>  
				</div>
			</div>
		<?php endif; ?>
		
	
		<?php if((is_active_sidebar('footer2') || $fd) && empty($custom_footer)): ?>
			<footer class="main-footer main-footer-<?php echo esc_attr($ft); ?> text-color-<?php echo $fcolor; ?>" <?php if($fbg != ''): ?>style="background-color:<?php echo $fbg; ?>"<?php endif; ?>>
				<div class="container">
	                <?php if ( !is_active_sidebar( 'footer2' ) ) : ?>
	               		<?php if($fd) etheme_footer_demo('footer2'); ?>
	                <?php else: ?>
	                    <?php dynamic_sidebar( 'footer2' ); ?>
	                <?php endif; ?>
	                <?php do_action('etheme_after_footer_widgets'); ?>
				</div>

			</footer>
		<?php endif; ?>
	
		<?php if(!empty($custom_footer)): ?>
            <footer class="main-footer main-footer-<?php echo esc_attr($ft); ?> text-color-<?php echo $fcolor; ?>" <?php if($fbg != ''): ?>style="background-color:<?php echo $fbg; ?>"<?php endif; ?>>
                <div class="container">
<?php 

echo '<div class="container">
        <div id="contato" class="vc_row wpb_row vc_row-fluid _mPS2id-t mPS2id-target mPS2id-target-first mPS2id-target-last">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                        <div class="wpb_text_column wpb_content_element  titulo-esquerda verde">
                            <div class="wpb_wrapper">
                                <h1>Contato</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true" class="vc_row wpb_row vc_row-fluid borda-rodape" style="position: relative; left: 0px; box-sizing: border-box; width: 753px;">
            <div class="wpb_column vc_column_container vc_col-sm-12">
                <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                        <hr class="divider  borda-verde-left" style="height:px;">
                    </div>
                </div>
            </div>
        </div>
        <div class="vc_row-full-width vc_clearfix"></div>
            <div class="vc_row wpb_row vc_row-fluid bg-rodape vc_custom_1529092022205 ult-vc-hide-row vc_row-has-fill" data-rtl="false" style="position: relative;" data-row-effect-mobile-disable="true" data-img-parallax-mobile-disable="true">
                <div class="upb_row_bg vcpb-default" data-upb_br_animation="" data-parallax_sense="30" data-bg-override="ex-full" data-bg-animation="left-animation" data-bg-animation-type="h" data-animation-repeat="repeat" style="background-size: cover; background-repeat: no-repeat; background-color: rgba(0, 0, 0, 0); background-image: url(&quot;http://nfvacd.adv.br/wp-content/uploads/2018/06/bg-footer-nunes_ferreira-vianna_araujo-cramer-duarte-advogados.png&quot;); background-attachment: scroll; min-width: 753px; left: 0px; width: 753px;">
                </div>
                <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner">
                        <div class="wpb_wrapper">
                            <div class="vc_row wpb_row vc_inner vc_row-fluid">
                                <div class="wpb_column vc_column_container vc_col-sm-6">
                                    <div class="vc_column-inner">
                                        <div class="wpb_wrapper">
                                            <div class="wpb_raw_code wpb_raw_js">
                                            <div class="wpb_wrapper">
                                                <script type="text/javascript" src="https://form.jotformz.com/jsform/80210677384659"></script><iframe title="Contato" src="" allowtransparency="true" allow="geolocation; microphone; camera" allowfullscreen="true" name="80210677384659" id="80210677384659" style="width: 10px; min-width: 100%; display: block; overflow: hidden; border: none; height: 584px;" scrolling="no"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="wpb_column vc_column_container vc_col-sm-6">
                            <div class="vc_column-inner">
                                <div class="wpb_wrapper">
                                    <div class="wpb_gmaps_widget wpb_content_element bloco-mapa">
                                        <div class="wpb_wrapper">
                                            <div class="wpb_map_wraper">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324.66227530010985!2d-43.21120016608652!3d-22.98208683984064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd507ca1bc7c3%3A0xf66f7ca2f53fae2f!2sDenisse!5e0!3m2!1spt-BR!2sbr!4v1660060578708!5m2!1spt-BR!2sbr" width="600" height="450" style="border: 0px; pointer-events: none;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>		</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Row Backgrounds -->
        <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true" class="vc_row wpb_row vc_row-fluid contato-rodape vc_row-no-padding ult-vc-hide-row vc_row-has-fill" data-rtl="false" style="position: relative; left: 0px; box-sizing: border-box; width: 753px;" data-row-effect-mobile-disable="true">
            <div class="upb_row_bg" data-bg-override="full" style="background: rgb(232, 234, 235); min-width: 753px; left: 439.5px; width: 753px;">
        </div>
        <div class="wpb_column vc_column_container vc_col-sm-12">
            <div class="vc_column-inner">
                <div class="wpb_wrapper">
                    <div class="uavc-list-icon uavc-list-icon-wrapper ult-adjust-bottom-margin icon-email-rodape">
                        <ul class="uavc-list">
                            <li class="lastItem firstItem">
                                <div class="uavc-list-content" id="list-icon-wrap-1412">
                                    <div class="uavc-list-icon " data-animation="" data-animation-delay="03" style="margin-right:15px;">
                                        <div class="ult-just-icon-wrapper ">
                                            <div class="align-icon" style="text-align:center;">
                                                <div class="aio-icon none " style="color:#2e6259;font-size:22px;display:inline-block;">
                                                    <i class="Defaults-envelope"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span data-ultimate-target="#list-icon-wrap-1412 .uavc-list-desc" data-responsive-json-new="{&quot;font-size&quot;:&quot;&quot;,&quot;line-height&quot;:&quot;&quot;}" class="uavc-list-desc ult-responsive" style="">
                                        <span style="color: #6d6e71;">
                                            <a style="color: #6d6e71;" href="mailto:escritorio@nvcd.com.br">escritorio@nvcd.com.br</a>
                                        </span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="uavc-list-icon uavc-list-icon-wrapper ult-adjust-bottom-margin ">
                        <ul class="uavc-list">
                            <li class="lastItem firstItem">
                                <div class="uavc-list-content" id="list-icon-wrap-5045">
                                    <div class="uavc-list-icon " data-animation="" data-animation-delay="03" style="margin-right:15px;">
                                        <div class="ult-just-icon-wrapper ">
                                            <div class="align-icon" style="text-align:center;">
                                                <div class="aio-icon none " style="color:#2e6259;font-size:22px;display:inline-block;">
                                                    <i class="Defaults-phone"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span data-ultimate-target="#list-icon-wrap-5045 .uavc-list-desc" data-responsive-json-new="{&quot;font-size&quot;:&quot;&quot;,&quot;line-height&quot;:&quot;&quot;}" class="uavc-list-desc ult-responsive" style="">
                                        <span style="color: #2e6259;">
                                            <strong>21 2220-6150</strong>
                                        </span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="uavc-list-icon uavc-list-icon-wrapper ult-adjust-bottom-margin ">
                        <ul class="uavc-list">
                            <li class="lastItem firstItem">
                                <div class="uavc-list-content" id="list-icon-wrap-1560">
                                    <div class="uavc-list-icon " data-animation="" data-animation-delay="03" style="margin-right:15px;">
                                        <div class="ult-just-icon-wrapper ">
                                            <div class="align-icon" style="text-align:center;">
                                                <div class="aio-icon none " style="color:#2e6259;font-size:22px;display:inline-block;">
                                                    <i class="Defaults-print"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span data-ultimate-target="#list-icon-wrap-1560 .uavc-list-desc" data-responsive-json-new="{&quot;font-size&quot;:&quot;&quot;,&quot;line-height&quot;:&quot;&quot;}" class="uavc-list-desc ult-responsive" style="">
                                        <span style="color: #2e6259;">
                                            <strong>21 2220-6458</strong>
                                        </span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="uavc-list-icon uavc-list-icon-wrapper ult-adjust-bottom-margin ">
                        <ul class="uavc-list">
                            <li class="lastItem firstItem">
                                <div class="uavc-list-content" id="list-icon-wrap-9147">
                                    <div class="uavc-list-icon " data-animation="" data-animation-delay="03" style="margin-right:15px;">
                                        <div class="ult-just-icon-wrapper ">
                                            <div class="align-icon" style="text-align:center;">
                                                <div class="aio-icon none " style="color:#2e6259;font-size:22px;display:inline-block;">
                                                    <i class="Defaults-map-marker"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span data-ultimate-target="#list-icon-wrap-9147 .uavc-list-desc" data-responsive-json-new="{&quot;font-size&quot;:&quot;&quot;,&quot;line-height&quot;:&quot;&quot;}" class="uavc-list-desc ult-responsive" style="">
                                        <span style="color: #6d6e71;">Rua Aníbal de Mendonça, 173, Casa 3, Ipanema - Rio de Janeiro RJ - 22410-050
                                        </span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="vc_icon_element vc_icon_element-outer vc_icon_element-align-left">
                        <div class="vc_icon_element-inner vc_icon_element-color-blue vc_icon_element-size-md vc_icon_element-style- vc_icon_element-background-color-grey">
                            <span class="vc_icon_element-icon fa fa-facebook-square"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="vc_row-full-width vc_clearfix"></div>
    <!-- Row Backgrounds -->
    <style type="text/css" data-type="vc_shortcodes-custom-css">.vc_custom_1529092022205{padding-bottom: 60px !important;}</style>  
</div>';

?>
                </div>
            </footer>
        <?php endif; ?>
	
		<?php if((is_active_sidebar('footer9') || is_active_sidebar('footer10') || $fd) && empty($custom_footer)): ?>
		<div class="copyright copyright-<?php echo esc_attr($ft); ?> text-color-<?php echo $fcolor; ?>" <?php if($fbg != ''): ?>style="background-color:<?php echo $fbg; ?>"<?php endif; ?>>
			<div class="container">
				<div class="row-copyrights">
					<div class="pull-left">
						<?php if(is_active_sidebar('footer9')): ?> 
							<?php dynamic_sidebar('footer9'); ?>	
						<?php else: ?>
							<?php if($fd) etheme_footer_demo('footer9'); ?>
						<?php endif; ?>
					</div>
					<div class="clearfix visible-xs"></div>
					<div class="copyright-payment pull-right">
						<?php if(is_active_sidebar('footer10')): ?> 
							<?php dynamic_sidebar('footer10'); ?>	
						<?php else: ?>
							<?php if($fd) etheme_footer_demo('footer10'); ?>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
	    <?php endif; ?>
    <?php endif; ?>
	
	</div> <!-- page wrapper -->
	</div> <!-- st-content-inner -->
	</div>
	</div>
	<?php do_action('after_page_wrapper'); ?>
	</div> <!-- st-container -->
	

    <?php if (etheme_get_option('loader')): ?>
    	<script type="text/javascript">
    		if(jQuery(window).width() > 1200) {
		        jQuery("body").queryLoader2({
		            barColor: "#111",
		            backgroundColor: "#fff",
		            percentage: true,
		            barHeight: 2,
		            completeAnimation: "grow",
		            minimumTime: 500,
		            onLoadComplete: function() {
			            jQuery('body').addClass('page-loaded');
		            }
		        });
    		}
        </script>
	<?php endif; ?>
	
	<?php if (etheme_get_option('to_top')): ?>
		<div id="back-top" class="back-top <?php if(!etheme_get_option('to_top_mobile')): ?>visible-lg<?php endif; ?> bounceOut">
			<a href="#top">
				<span></span>
			</a>
		</div>
	<?php endif ?>


	<?php
		/* Always have wp_footer() just before the closing </body>
		 * tag of your theme, or you will break many plugins, which
		 * generally use this hook to reference JavaScript files.
		 */

		wp_footer();
	?>
</body>

</html>