import classes from './Header.module.css'

import mealsImage from '../../assets/meals.jpg'
const Header = props => {
    return(
        <>
            <header className={classes.header}>
                <h1>FoodOrderingApp</h1>
                <button>Cart</button>
            </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt='Meals ' />
        </div>
        
        </>
    );
};

export default Header;