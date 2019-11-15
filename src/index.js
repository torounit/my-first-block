import { registerBlockType } from '@wordpress/blocks';
registerBlockType( 'my-first-block/hello', {
	title: 'hello',
	icon: 'palmtree',
	category: 'common',
	edit({ className } ) {
		return ( <div className={ className }>エディターだよ。</div> );
	},
	save({ className } ) {
		return ( <div className={ className }>保存されるデータ、実際に表示されるテキスト。</div> );
	},
} );
