import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

const edit = ( { className, attributes: { text }, setAttributes } ) => {
	const onChange = ( value ) => setAttributes( { text: value } );
	return (
		<div className={ className }>
			<RichText tagName="div" className="text" value={ text } onChange={ onChange } />
		</div>
	);
};

const save = ( { className, attributes: { text } } ) => {
	return (
		<div className={ className }>
			<RichText.Content tagName="div" className="text" value={ text } />
		</div>
	);
};

registerBlockType( 'my-first-block/hello', {
	title: 'hello',
	icon: 'palmtree',
	category: 'common',
	attributes: {
		text: {
			type: 'string',
			default: '',
		},
	},
	edit,
	save,
} );
