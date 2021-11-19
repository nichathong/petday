export const fetchBusinesses = (filters) => (
    $.ajax({
        method: 'GET',
        url: 'api/businesses',
        data: {filters},
        error: (err) => console.log(err)
    })
);

export const fetchBusiness = id => {
     return $.ajax({
        method: 'GET',
        url: `api/businesses/${id}`
    })
};

export const updateBusiness = (business) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/businesses/${business.id}`,
        data: {business}
    })
}
// export const updateBusiness = (businessForm, businessId) => (
//     $.ajax({
//         method: 'PATCH',
//         url: `api/businesses/${businessId}`,
//         data: businessForm,
//         contentType: false,
//         processData: false
//     })
// );



export const fetchReviews = business_id => (
    $.ajax({
        method: 'GET',
        url: 'api/reviews',
        data: { business_id }
    })
);

// export const search = query => (
//   $.ajax({
//     method: 'GET',
//     url: 'api/omnisearch',
//     data: {query}
//   })
// );

// export const fetchAllReviews = () => (
//     $.ajax({
//         method: 'GET',
//         url: 'api/reviews'
//     })
// );

// export const createReview = data => (
//     $.ajax({
//         method: 'POST',
//         url: 'api/reviews',
//         data
//     })
// );