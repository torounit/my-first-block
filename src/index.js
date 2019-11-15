import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const edit = ( { className } ) => {
	return (
		<div className={ className }>
			<InnerBlocks allowedBlocks={ [ 'core/code' ] } />
		</div>
	);
};

const save = ( { className } ) => {
	return (
		<div className={ className }>
			<InnerBlocks.Content />
		</div>
	);
};

registerBlockType( 'my-first-block/hello', {
	title: 'hello',
	icon: 'palmtree',
	category: 'common',
	edit,
	save,
} );
