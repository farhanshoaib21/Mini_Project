import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    gender: '',
    membershipType: '',
    duration: '',
  });
  
  // Calculate membership fee based on type and duration
  const calculateFee = (type, duration) => {
    const basePrices = {
      'Basic': 2000,
      'Standard': 3000,
      'Premium': 5000
    };
    return basePrices[type] * duration;
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userCredentials'));
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    
    if (storedUser && storedFormData) {
      const joiningDate = new Date();
      const membershipDuration = parseInt(storedFormData.duration);
      const expiryDate = new Date();
      expiryDate.setMonth(expiryDate.getMonth() + membershipDuration);
      
      const membershipFee = calculateFee(storedFormData.membershipType, membershipDuration);

      setUser({
        name: storedUser.username,
        email: storedFormData.email,
        phone: storedFormData.phone,
        gender: storedFormData.gender,
        membershipType: storedFormData.membershipType,
        joiningDate: joiningDate.toLocaleDateString(),
        expiryDate: expiryDate.toLocaleDateString(),
        duration: `${membershipDuration} months`,
        fee: `Rs${membershipFee}`,
        selectedFacilities: storedFormData.selectedFacilities || 'Gym, Pool, Yoga',
        status: expiryDate > new Date() ? 'Active' : 'Expired'
      });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userCredentials', JSON.stringify({ username: formData.username }));
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.reload();
  };

  return (
    <div style={styles.container}>
      {user ? (
        <div style={styles.dashboardBox}>
          <h1 style={styles.header}>Welcome, {user.name}!</h1>
          <p style={styles.subHeader}>Your membership details</p>
          
          <div style={styles.detailsContainer}>
            <div style={styles.detailSection}>
              <h3 style={styles.sectionHeader}>Personal Information</h3>
              <DetailItem label="Email" value={user.email} />
              <DetailItem label="Phone" value={user.phone} />
              <DetailItem label="Gender" value={user.gender} />
            </div>
            
            <div style={styles.detailSection}>
              <h3 style={styles.sectionHeader}>Membership Details</h3>
              <DetailItem label="Type" value={user.membershipType} />
              <DetailItem label="Duration" value={user.duration} />
              <DetailItem label="Joining Date" value={user.joiningDate} />
              <DetailItem label="Expiry Date" value={user.expiryDate} />
              <DetailItem label="Status" value={user.status} />
              <DetailItem label="Total Fee" value={user.fee} />
            </div>
            
            <div style={styles.detailSection}>
              <h3 style={styles.sectionHeader}>Facilities</h3>
              <DetailItem label="Access to" value={user.selectedFacilities} />
            </div>
          </div>
          
          <button 
            onClick={() => {
              localStorage.removeItem('userCredentials');
              localStorage.removeItem('formData');
              navigate('/login');
            }} 
            style={styles.logoutButton}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.header}>Fill Your Details</h2>
          <input type="text" name="username" placeholder="Name" onChange={handleChange} required style={styles.input} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={styles.input} />
          <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required style={styles.input} />
          <select name="gender" onChange={handleChange} required style={styles.input}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <select name="membershipType" onChange={handleChange} required style={styles.input}>
            <option value="">Select Membership Type</option>
            <option value="Basic">Basic (Rs2000/month)</option>
            <option value="Standard">Standard (Rs3000/month)</option>
            <option value="Premium">Premium (Rs5000/month)</option>
          </select>
          <select name="duration" onChange={handleChange} required style={styles.input}>
            <option value="">Select Duration</option>
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
          </select>
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
      )}
    </div>
  );
};

// Helper component for displaying detail items
const DetailItem = ({ label, value }) => (
  <div style={styles.detailItem}>
    <span style={styles.detailLabel}>{label}:</span>
    <span style={styles.detailValue}>{value}</span>
  </div>
);

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    background: '#121212',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboardBox: {
    background: '#222',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(255, 204, 0, 0.3)',
    width: '90%',
    maxWidth: '800px',
  },
  header: {
    color: '#d0ff00',
    fontSize: '28px',
    marginBottom: '10px',
  },
  subHeader: {
    color: '#aaa',
    marginBottom: '20px',
  },
  detailsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '20px 0',
    gap: '20px',
  },
  detailSection: {
    flex: 1,
    minWidth: '250px',
    background: '#333',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'left',
  },
  sectionHeader: {
    color: '#d0ff00',
    borderBottom: '1px solid #ffcc00',
    paddingBottom: '8px',
    marginBottom: '15px',
  },
  detailItem: {
    marginBottom: '12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#d0ff00',
  },
  detailValue: {
    color: '#fff',
  },
  logoutButton: {
    padding: '12px 20px',
    background: '#ff3333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    fontSize: '16px',
    width: '100%',
    transition: 'background 0.3s',
    ':hover': {
      background: '#ff0000',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    background: '#222',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(255, 204, 0, 0.5)',
    maxWidth: '400px',
    width: '90%',
  },
  input: {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #444',
    background: '#333',
    color: '#fff',
    fontSize: '16px',
  },
  submitButton: {
    padding: '12px',
    background: '#d0ff00',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background 0.3s',
    ':hover': {
      background: '#ffdd33',
    },
  },
};

export default Dashboard;