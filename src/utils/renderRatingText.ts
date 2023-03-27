import { Review } from '@prisma/client'
import { calculateReviewsRatingAverage } from './calculateReviewsRatingAverage'

export const renderRatingText = (reviews: Review[]) => {
    const rating = calculateReviewsRatingAverage(reviews)

    if (rating > 4) return 'Awesome'
    else if (rating <= 4 && rating > 3) return 'Good'
    else if (rating <= 3 && rating > 0) return 'Average'
    else if (rating === 0) return `Haven't reviews`
}