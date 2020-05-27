/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { mediaAndText as icon } from '@wordpress/icons';

/**
 * Internal dependencies.
 */
import edit from './edit';
import metadata from './block';
import save from './save';
import transforms from './transforms';

const { attributes, category, name } = metadata;

export { metadata, name };

// Settings.
export const settings = {
	title: __( 'Crowdfunding Donut', 'pronamic-pay-crowdfunding' ),
	description: __( 'Displays crowdfunding information with progress donut.', 'pronamic-pay-crowdfunding' ),
	category,
	icon,
	example: {},
	attributes,
	edit,
	save,
	transforms
};