import { redirect } from 'next/navigation';

export async function GET() {
  redirect('https://raw.githubusercontent.com/global-index-source/ksau-go/master/setup.sh');
}

