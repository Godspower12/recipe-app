import { NextResponse } from 'next/server';
import recipes from '../../../../../data/recipes';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const recipe = recipes.find((recipe) => recipe.id === params.id);
  if (!recipe) {
    return NextResponse.json({ message: 'Recipe not found' }, { status: 404 });
  }
  const { comment } = await req.json();
  recipe.comments.push(comment);
  return NextResponse.json(recipe);
}
