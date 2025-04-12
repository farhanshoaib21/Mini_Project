// FitnessNutritionCalculator.jsx
import React, { useState } from 'react';

const FitnessNutritionCalculator = () => {
  const [inputs, setInputs] = useState({
    age: 25,
    weight: 70,
    height: 170,
    gender: 'male',
    activity: 'moderate',
    goal: 'maintain'
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const calculateNutrition = () => {
    const { age, weight, height, gender, activity, goal } = inputs;
    
    // Calculate BMR (Mifflin-St Jeor Equation)
    let bmr = gender === 'male' 
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161;
    
    // Activity multipliers
    const activityMap = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };
    
    // Calculate TDEE
    let tdee = bmr * activityMap[activity];
    
    // Adjust for goal
    let calories;
    switch(goal) {
      case 'lose':
        calories = tdee - 500;
        break;
      case 'gain':
        calories = tdee + 500;
        break;
      default:
        calories = tdee;
    }
    
    // Macronutrient calculations
    const proteinGrams = Math.round((weight * 2.2)); // 1g per lb of body weight
    const proteinCalories = proteinGrams * 4;
    const fatCalories = calories * 0.25; // 25% of calories from fat
    const fatGrams = Math.round(fatCalories / 9);
    const carbCalories = calories - proteinCalories - fatCalories;
    const carbGrams = Math.round(carbCalories / 4);
    
    // Micronutrient recommendations
    const fiber = Math.round(calories / 1000 * 14); // 14g per 1000 calories
    const water = Math.round(weight * 0.033); // liters per day
    
    setResults({
      calories: Math.round(calories),
      macros: {
        protein: proteinGrams,
        carbs: carbGrams,
        fats: fatGrams
      },
      micros: {
        fiber,
        water,
        sodium: 2300, // mg
        sugar: Math.round(calories * 0.1 / 4) // 10% of calories
      }
    });
  };

  // Color palette from the image (bold and motivational)
  const colors = {
    primary: '#FFFFFF',       // Deep black for background
    secondary: '#D0FF00',     // Neon yellow-green highlight
    accent: '#808080',        // Light gray/white for text
    highlight: '#A8FF00',     // Bright neon green
    dark: '#000000',          // True black for contrast
    light: '#000000' , 
    text:'#D0FF00',        // Slightly lighter black for depth
  };


  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: "'Montserrat', sans-serif",
      color: colors.primary,
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.light} 100%)`,
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(255, 255, 255, 0.1)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '900',
      color: colors.dark,
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '0.5rem'
    },
    subtitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: colors.secondary,
      marginBottom: '1rem'
    },
    tagline: {
      fontSize: '1rem',
      fontWeight: '500',
      color: colors.primary,
      fontStyle: 'italic',
      marginBottom: '2rem'
    },
    calculator: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      marginBottom: '2rem'
    },
    inputGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
      color: colors.text
    },
    input: {
      width: '100%',
      padding: '0.8rem',
      border: `2px solid ${colors.highlight}`,
      borderRadius: '6px',
      fontSize: '1rem',
      backgroundColor: colors.accent
    },
    button: {
      backgroundColor: colors.secondary,
      color: colors.accent,
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '6px',
      fontSize: '1.1rem',
      fontWeight: '700',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      transition: 'all 0.3s ease',
      width: '100%',
      marginTop: '1rem'
    },
    buttonHover: {
      backgroundColor: colors.dark,
      transform: 'translateY(-2px)'
    },
    results: {
      backgroundColor: colors.dark,
      color: colors.accent,
      padding: '2rem',
      borderRadius: '8px',
      marginTop: '2rem'
    },
    resultHeader: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },
    macroGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      marginBottom: '2rem'
    },
    macroCard: {
      backgroundColor: colors.accent,
      color: colors.text,
      padding: '1.5rem',
      borderRadius: '6px',
      textAlign: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    macroValue: {
      fontSize: '2rem',
      fontWeight: '800',
      color: colors.secondary,
      margin: '0.5rem 0'
    },
    microList: {
      listStyle: 'none',
      padding: 0,
      marginTop: '1.5rem'
    },
    microItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.8rem',
      paddingBottom: '0.8rem',
      borderBottom: `1px solid ${colors.highlight}`
    },
    motivation: {
      textAlign: 'center',
      marginTop: '2rem',
      fontSize: '1.2rem',
      fontWeight: '600',
      color: colors.secondary
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>CALORIE CALCULATOR</h1>
        <h2 style={styles.subtitle}></h2>
        <p style={styles.tagline}>SWEAT, SACRIFICE, SUCCESS.</p>
      </div>
      
      <div style={styles.calculator}>
        <div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Gender</label>
            <select 
              name="gender" 
              value={inputs.gender} 
              onChange={handleInputChange}
              style={styles.input}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Age</label>
            <input
              type="number"
              name="age"
              value={inputs.age}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={inputs.weight}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
        </div>
        
        <div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Height (cm)</label>
            <input
              type="number"
              name="height"
              value={inputs.height}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Activity Level</label>
            <select
              name="activity"
              value={inputs.activity}
              onChange={handleInputChange}
              style={styles.input}
            >
              <option value="sedentary">Sedentary</option>
              <option value="light">Light Activity</option>
              <option value="moderate">Moderate Activity</option>
              <option value="active">Active</option>
              <option value="veryActive">Very Active</option>
            </select>
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Goal</label>
            <select
              name="goal"
              value={inputs.goal}
              onChange={handleInputChange}
              style={styles.input}
            >
              <option value="lose">Lose Weight</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Weight</option>
            </select>
          </div>
        </div>
      </div>
      
      <button 
        style={styles.button}
        onClick={calculateNutrition}
        onMouseOver={e => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={e => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
      >
        GET STARTED
      </button>
      
      {results && (
        <div style={styles.results}>
          <h3 style={styles.resultHeader}>YOUR PERSONALIZED NUTRITION PLAN</h3>
          
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Total Daily Calories:</p>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: colors.secondary }}>
              {results.calories}
              <span style={{ fontSize: '1rem', color: colors.accent }}> kcal</span>
            </p>
          </div>
          
          <div style={styles.macroGrid}>
            <div style={styles.macroCard}>
              <div>PROTEIN</div>
              <div style={styles.macroValue}>{results.macros.protein}g</div>
              <div>{(results.macros.protein * 4 / results.calories * 100).toFixed(0)}% of calories</div>
            </div>
            <div style={styles.macroCard}>
              <div>CARBS</div>
              <div style={styles.macroValue}>{results.macros.carbs}g</div>
              <div>{(results.macros.carbs * 4 / results.calories * 100).toFixed(0)}% of calories</div>
            </div>
            <div style={styles.macroCard}>
              <div>FATS</div>
              <div style={styles.macroValue}>{results.macros.fats}g</div>
              <div>{(results.macros.fats * 9 / results.calories * 100).toFixed(0)}% of calories</div>
            </div>
          </div>
          
          <h4 style={{ marginBottom: '1rem', textAlign: 'center' }}>ESSENTIAL NUTRIENTS:</h4>
          <ul style={styles.microList}>
            <li style={styles.microItem}>
              <span>Fiber:</span>
              <span>{results.micros.fiber}g daily</span>
            </li>
            <li style={styles.microItem}>
              <span>Water:</span>
              <span>{results.micros.water}L ({Math.round(results.micros.water * 33.8)} oz)</span>
            </li>
            <li style={styles.microItem}>
              <span>Sodium:</span>
              <span>{results.micros.sodium}mg max</span>
            </li>
            <li style={styles.microItem}>
              <span>Added Sugar:</span>
              <span>{results.micros.sugar}g max</span>
            </li>
          </ul>
          
          <p style={styles.motivation}>
            SWEAT TODAY FOR A STRONGER TOMORROW
          </p>
        </div>
      )}
    </div>
  );
};

export default FitnessNutritionCalculator;