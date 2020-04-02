import React from 'react';

const Menu = props => {
    return (
      <section className="side-menu">
          <aside>
              <ul className="side-menu">
                 <li>{props.home}</li> 
                 <i className="fas fa-home active" />
                 <li>{props.savings}</li>
                
              </ul>
          </aside>
      </section>
    );
}

export default Menu;
