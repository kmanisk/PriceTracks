// "use client"
//
// import { scrapeAndStoreProduct } from '@/lib/actions';
// import { FormEvent, useState } from 'react'
//
// const isValidAmazonProductURL = (url: string) => {
//   try {
//     const parsedURL = new URL(url);
//     const hostname = parsedURL.hostname;
//
//     if(
//       hostname.includes('amazon.com') || 
//       hostname.includes ('amazon.') || 
//       hostname.endsWith('amazon')
//     ) {
//       return true;
//     }
//   } catch (error) {
//     return false;
//   }
//
//   return false;
// }
//
// const Searchbar = () => {
//   const [searchPrompt, setSearchPrompt] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//
//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//
//     const isValidLink = isValidAmazonProductURL(searchPrompt);
//
//     if(!isValidLink) return alert('Please provide a valid Amazon link')
//
//     try {
//       setIsLoading(true);
//
//       // Scrape the product page
//       const product = await scrapeAndStoreProduct(searchPrompt);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   }
//
//   return (
//     <form 
//       className="flex flex-wrap gap-4 mt-12" 
//       onSubmit={handleSubmit}
//     >
//       <input 
//         type="text"
//         value={searchPrompt}
//         onChange={(e) => setSearchPrompt(e.target.value)}
//         placeholder="Enter product link"
//         className="searchbar-input"
//       />
//
//       <button 
//         type="submit" 
//         className="searchbar-btn"
//         disabled={searchPrompt === ''}
//       >
//         {isLoading ? 'Searching...' : 'Search'}
//       </button>
//     </form>
//   )
// }
//
// export default Searchbar
//
"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from 'react';
import { scrapeAndStoreProduct } from '@/lib/actions';

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if (
      hostname.includes('amazon.com') ||
      hostname.includes('amazon.') ||
      hostname.endsWith('amazon')
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
}

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink) return alert('Please provide a valid Amazon link');

    try {
      setIsLoading(true);

      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="w-full max-w-sm"
      />
      <Button
        type="submit"
        className="w-full max-w-sm"
        disabled={searchPrompt === ''}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
    </form>
  );
}

export default Searchbar;
