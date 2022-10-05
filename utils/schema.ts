import {z} from 'zod';

export const schema = z.object({
	title: z.string(),
	subtitle: z.string().optional(),
	type: z.enum(['png', 'jpeg', 'webp']).default('jpeg'),
	dark: z
		.enum(['true', 'false'])
		.default('false')
		.transform(value => value === 'true'),
});
