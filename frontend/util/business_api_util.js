export const fetchBusinesses = bounds => (
    $.ajax({
        method: 'GET',
        url: 'api/businesses',
        data: bounds,
        error: (err) => console.log(err)
    })
);

export const fetchBusiness = id => {
     return $.ajax({
        method: 'GET',
        url: `api/businesses/${id}`
    })
};

export const fetchReviews = business_id => (
    $.ajax({
        method: 'GET',
        url: 'api/reviews',
        data: { business_id }
    })
);

export const fetchAllReviews = () => (
    $.ajax({
        method: 'GET',
        url: 'api/reviews'
    })
);

export const createReview = data => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data
    })
);