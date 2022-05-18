import { createClient } from '@supabase/supabase-js'
import { API_KEY, API_URL } from '../constant'

// Create a single supabase client for interacting with your database 
export const supabase = createClient(API_URL, API_KEY)