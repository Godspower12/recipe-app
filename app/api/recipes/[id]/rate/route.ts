import { NextResponse } from 'next/server';
import recipes from '../../../../../data/recipes';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const recipe = recipes.find((recipe) => recipe.id === params.id);
  if (!recipe) {
    return NextResponse.json({ message: 'Recipe not found' }, { status: 404 });
  }
  const { rating } = await req.json();
  recipe.ratings.push(rating);
  return NextResponse.json(recipe);
}
