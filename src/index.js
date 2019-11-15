import { registerBlockType } from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';

export const useCurrentUser = () => {
	return useSelect( ( select ) => {
		return select( 'core' ).getCurrentUser();
	} );
};

const edit = ( { className } ) => {
	const { name } = useCurrentUser();
	return (
		<div className={ className }>
			Hello  { name } !!
		</div>
	);
};

const save = () => null;

registerBlockType( 'my-first-block/hello', {
	title: 'hello',
	icon: 'palmtree',
	category: 'common',
	edit,
	save,
} );
