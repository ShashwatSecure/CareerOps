import { supabase } from '../../../../lib/supabase';

export default async function handler(req, res) {
  const { slug } = req.query;

  const { data, error } = await supabase
    .from('colleges')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'College not found' });
  }
  res.status(200).json(data);
}
