export type Module = {
	id: number;
	title: string;
	subtitle: string;
	details: string;
	image: string;
};

export type Item = {
	id: number;
	name: string;
	type: string;
	subtype: string;
	rarity: string;
	requiresAttunement: boolean;
	description: string;
	// curseDescription: string;
	moduleId: number;
};
