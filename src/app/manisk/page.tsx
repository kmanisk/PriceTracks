'use client';
import { useState } from 'react';
import parse from 'html-react-parser';
import { Button } from '@/components/ui/button'; // ShadCN Button
import { Input } from '@/components/ui/input'; // ShadCN Input
import { Card } from '@/components/ui/card'; // ShadCN Card

export default function Home() {
	const [price, setPrice] = useState<string>('');
	const [url, setUrl] = useState<string>('');
	const [productName, setProductName] = useState<string>('');
	const [rating, setRating] = useState<string>('');
	const [ratingCount, setRatingCount] = useState<string>('');

	const handleClick = async () => {
		try {
			const encodedUrl = encodeURIComponent(url);
			const response = await fetch(`https://api.scraperapi.com/?api_key=1c55a2274056e9e0bbe93eb71b02aaa8&url=${encodedUrl}&retry_404=true&device_type=desktop`);
			const htmlText = await response.text();

			const options = {
				replace: (domNode: any) => {
					if (domNode.attribs) {
						// Price
						if (domNode.attribs.class === 'Nx9bqj CxhGGd') {
							setPrice(domNode.children[0].data);
						}
						// Product Name
						if (domNode.attribs.class === 'VU-ZEz') {
							setProductName(domNode.children[0]?.data || '');
						}
						// Rating - extract number before the <img> tag
						if (domNode.attribs.class === 'XQDdHH _1Quie7') {
							const ratingText = domNode.children?.[0]?.data?.trim();
							if (ratingText && !isNaN(parseFloat(ratingText))) {
								setRating(ratingText);
							}
						}
						// Rating Count - extract text from nested span
						if (domNode.attribs.class === 'Wphh3N') {
							const reviewText = domNode.children?.[0]?.children?.[0]?.data?.trim();
							if (reviewText) {
								setRatingCount(reviewText);
							}
						}
					}
				}
			};

			parse(htmlText, options);
		} catch (error) {
			console.log('Error:', error);
		}
	};

	return (
		<div className="min-h-screen p-4 flex flex-col items-center gap-4">
			<Input
				value={url}
				onChange={(e) => setUrl(e.target.value)}
				placeholder="Enter Flipkart product URL"
				className="w-full max-w-2xl"
			/>

			<Button
				onClick={handleClick}
				className="w-full max-w-2xl bg-primary px-6 py-3 rounded-lg"
			>
				Get Product Details
			</Button>

			{(price || productName || rating || ratingCount) && (
				<Card className="w-full max-w-2xl p-6 mt-6">
					{productName && (
						<h2 className="text-xl font-bold mb-4">{productName}</h2>
					)}
					{price && (
						<div className="text-2xl font-bold mb-3">Price: {price}</div>
					)}
					{rating && (
						<div className="flex items-center gap-2 mb-2">
							<span className="font-semibold">Rating: {rating}★</span>
						</div>
					)}
					{ratingCount && (
						<div className="text-gray-600">{ratingCount}</div>
					)}
				</Card>
			)}
		</div>
	);
}
