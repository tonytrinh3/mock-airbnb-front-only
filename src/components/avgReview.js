export const avgReview = (reviews, type) => {
    //this could be in a separate function file
    // console.log(reviews);
    let sum = 0;
    reviews.forEach((review) => {
        sum += review[type];
    });

    return Math.round((sum / reviews.length) * 10) / 10;
};
