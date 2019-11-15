import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Toolbar } from '@wordpress/components';

const edit = ( { className, attributes: { text, lightbulb, carrot }, setAttributes } ) => {
	const onChange = ( value ) => setAttributes( { text: value } );
	const onChangeLightblub = ( value ) => setAttributes( { lightbulb: value } );
	return (
		<>
			<InspectorControls>
				<PanelBody title="Lightbulb" icon="lightbulb" initialOpen={ true }>
					<SelectControl
						label="Type"
						value={ lightbulb }
						options={ [
							{ label: 'Alpha', value: 'alpha' },
							{ label: 'Beta', value: 'beta' },
							{ label: 'Camma', value: 'gamma' },
						] }
						onChange={ onChangeLightblub }
					/>

				</PanelBody>
			</InspectorControls>
			<BlockControls>
				<Toolbar controls={ [
					{
						icon: 'carrot',
						title: 'Carrot',
						isActive: carrot,
						onClick: () => setAttributes( { carrot: ! carrot } ),
					},
				] } />
			</BlockControls>
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
		carrot: {
			type: 'boolean',
			default: false,
		},
		lightbulb: {
			type: 'string',
			source: 'meta',
			meta: 'lightbulb',
			default: '',
		},
	},
	edit,
	save,
} );
