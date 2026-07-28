/* ============================================================
   LAKOU SANTÉ — client Supabase partagé
   À inclure une seule fois par page (avant les autres scripts)
   pour éviter les instances multiples de GoTrueClient, comme
   pour Architecture Intérieure.
   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
   <script src="supabase-client.js"></script>
   ============================================================ */

const SUPABASE_URL = "https://tiziurfpjqtwmfirfgcd.supabase.co";
const SUPABASE_KEY = "sb_publishable_dS023UzT7Jje3YWacIO0Nw_4C-D3Tsq";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
