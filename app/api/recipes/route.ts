import { NextResponse } from 'next/server';
import recipes, { Recipe } from '../../../data/recipes';

export async function GET() {
  return NextResponse.json(recipes);
}

export async function POST(req: Request) {
  const body: Recipe = await req.json();
  const newRecipe = {
    ...body,
    id: `${recipes.length + 1}`,
    ratings: [],
    comments: [],
  };
  recipes.push(newRecipe);
  return NextResponse.json(newRecipe, { status: 201 });
}
