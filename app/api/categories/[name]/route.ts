import { NextResponse } from 'next/server';
import recipes from '../../../../data/recipes';

export async function GET(req: Request, { params }: { params: { name: string } }) {
  const filteredRecipes = recipes.filter((recipe) => recipe.category.toLowerCase() === params.name.toLowerCase());
  if (filteredRecipes.length === 0) {
    return NextResponse.json({ message: 'No recipes found for this category' }, { status: 404 });
  }
  return NextResponse.json(filteredRecipes);
}
