import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['god']);

	return (
		<div>
			<h2> Gif expert app</h2>
			<hr />
			<AddCategory setCategories={setCategories} />
			<ul>
				{categories.map((category) => (
					
						<GifGrid key={category} category={category} />
					
				))}
			</ul>
		</div>
	);
};
