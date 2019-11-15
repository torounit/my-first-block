import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';

const edit = ( { className, attributes: { text, foo }, setAttributes } ) => {
	const onChange = ( value ) => setAttributes( { text: value } );
	const onChangeFoo = ( value ) => setAttributes( { foo: value } );
	return (
		<>
			<InspectorControls>
				<PanelBody>
					<SelectControl
						label="Foo"
						value={ foo }
						options={ [
							{ label: 'Alpha', value: 'alpha' },
							{ label: 'Beta', value: 'beta' },
							{ label: 'Camma', value: 'gamma' },
						] }
						onChange={ onChangeFoo }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ className }>
				<RichText tagName="div" className="text" value={ text } onChange={ onChange } />
			</div>
		</>
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
			source: 'html',
			selector: '.text',
			default: '',
		},
		foo: {
			type: 'string',
			source: 'meta',
			meta: 'my_post_hello_foo',
			default: '',
		},
	},
	edit,
	save,
} );
