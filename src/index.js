import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';

const edit = ( { className, attributes: { text }, setAttributes } ) => {
	const onChange = ( value ) => {
		return setAttributes( { text: value } );
	};
	return (
		<div className={ className }>
			<TextControl value={ text } onChange={ onChange } />
		</div>
	);
};

const save = ( { className, attributes: { text } } ) => {
	return (
		<div className={ className }>
			<div className="text">{ text }</div>
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
