document.addEventListener('DOMContentLoaded', () => {

    const productDropdown1 = document.getElementById('product-dropdown1');
    const productDropdown2 = document.getElementById('product-dropdown2');
    const productDropdown3 = document.getElementById('product-dropdown3');
    const productDropdown4 = document.getElementById('product-dropdown4');
    const productDropdown5 = document.getElementById('product-dropdown5');

    function populateDropdown(dropdown, dataArray, defaultText) {
        
        dropdown.innerHTML = '';
        
        const defaultOption = document.createElement('option');
        //defaultOption.value = '';
        defaultOption.textContent = defaultText;
        dropdown.appendChild(defaultOption);

        for (const item of dataArray) {
            const option = document.createElement('option');
            option.value = item.value;
            option.textContent = item.text;
            dropdown.appendChild(option);
        }
    }

   
    async function fetchAndPopulateAllDropdowns() {
        try {
            
            const response = await fetch('../data/dropdown_data.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const allData = await response.json();

            populateDropdown(productDropdown1, allData.certifications,"Certifications ");
            populateDropdown(productDropdown2, allData.educator_resources,"Educator resources ");
            populateDropdown(productDropdown3, allData.learner_resources, "Learner resources ");
            populateDropdown(productDropdown4, allData.buy,"Buy");
            populateDropdown(productDropdown5, allData.about_us,"About us");

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchAndPopulateAllDropdowns();
});

// document.addEventListener('DOMContentLoaded', () => {
    
//     const productDropdown1 = document.getElementById('product-dropdown1');
//     const productDropdown2 = document.getElementById('product-dropdown2');
//     const productDropdown3 = document.getElementById('product-dropdown3');
//     const productDropdown4 = document.getElementById('product-dropdown4');
//     const productDropdown5 = document.getElementById('product-dropdown5');

//     // Function to fetch and populate the dropdown
//     async function populateDropdown() {
//         try {
//             const response = await fetch('../data/dropdown_data.json');
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             const products = await response.json();

//             // Loop through the JSON data and create options
//             for (const product of products) {
//                 const option = document.createElement('option');
//                 option.value = product.value;
//                 option.textContent = product.text;
//                 productDropdown1.appendChild(option);
//             }
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     }

//     // Call the populateDropdown function when the page loads
//     populateDropdown();

// });

