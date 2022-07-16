import '../styles/_section.scss';

function Section(props) {
  // Component styles; More styles in 'styles/_section.scss'
  const styles = {
    backgroundColor: props.color || '#F8F9FA',
    backgroundOpacity: props.opactity || '100%',
  };

  return (
    <div style={styles} className="section-component">
      {props.children}
    </div>
  );
}

export default Section;
