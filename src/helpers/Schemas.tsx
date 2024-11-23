import { z } from "zod";

export const ModuleSchema = z.object({
	id: z.number(),
	title: z.string(),
	subtitle: z.string(),
	details: z.string(),
	image: z.string(),
});
export const ModulesSchema = z.array(ModuleSchema);
export type Module = z.infer<typeof ModuleSchema>;

export const ItemSchema = z.object({
	id: z.number(),
	name: z.string(),
	type: z.string(),
	subtype: z.string(),
	rarity: z.string(),
	requiresAttunement: z.boolean(),
	description: z.string(),
	curseDescription: z.string().optional(),
	moduleId: z.number(),
});
export const ItemsSchema = z.array(ItemSchema);
export type Item = z.infer<typeof ItemSchema>;
