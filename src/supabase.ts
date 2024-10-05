import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Get image URLs from the supabase storage bucket.
export const getImageUrls = async () => {
  const { data, error } = await supabase
    .from('images_shown')
    .select('image_url, "order"')
    .order('order', { ascending: true })

  if (error) {
    console.error('Error fetching images from the database:', error)
    return []
  }

  return data.map((file) => file.image_url)
}
