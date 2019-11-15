import { registerBlockType } from '@wordpress/blocks';
import { ServerSideRender } from '@wordpress/components';

const edit = ( { className } ) => (
	<ServerSideRender
		block="my-first-block/hello"
		attributes={ {
			className,
		} }
	/>
);

const save = () => null;

registerBlockType( 'my-first-block/hello', {
	title: 'hello',
	icon: 'palmtree',
	category: 'common',
	edit,
	save,
} );
