<?php
/**
 * Plugin Name: my first block
 */

function my_first_block_register_block() {
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
	wp_register_script(
		'my-first-block',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);
	// block の登録。
	register_block_type( 'my-first-block/hello', array(
		'editor_script' => 'my-first-block',
	) );
}
add_action( 'init', 'my_first_block_register_block' );
