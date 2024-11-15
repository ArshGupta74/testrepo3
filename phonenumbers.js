// Contact Information
const mainLine = '555-123-4567';
const support = '(555) 234-5678';

/* Emergency: 555-345-6789 */
function formatPhone(phone) {
    // Test: 555-456-7890
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}

let contacts = {
    sales: '+1-555-567-8901',
    help: '555-678-9012'
};
