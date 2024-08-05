import { NextResponse } from 'next/server';
import recipes from '../../../../data/recipes';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const recipe = recipes.find((recipe) => recipe.id === params.id);
  if (!recipe) {
    return NextResponse.json({ message: 'Recipe not found' }, { status: 404 });
  }
  return NextResponse.json(recipe);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const recipe = recipes.find((recipe) => recipe.id === params.id);
  if (!recipe) {
    return NextResponse.json({ message: 'Recipe not found' }, { status: 404 });
  }
  const updatedRecipe = await req.json();
  Object.assign(recipe, updatedRecipe);
  return NextResponse.json(recipe);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === params.id);
  if (recipeIndex === -1) {
    return NextResponse.json({ message: 'Recipe not found' }, { status: 404 });
  }
  recipes.splice(recipeIndex, 1);
  return NextResponse.json({ message: 'Recipe deleted' }, { status: 204 });
}
