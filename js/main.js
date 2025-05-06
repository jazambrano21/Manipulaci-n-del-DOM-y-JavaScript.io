const obtenerImagenes = () => {
    const datos = localStorage.getItem('imagenes');
    return datos ? JSON.parse(datos) : [];
  };
  
  const aplicarEstilos = (elemento, estilos) => {
    Object.assign(elemento.style, estilos);
  };
  
  const renderPagina = () => {
    document.body.innerHTML = '';
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'sans-serif';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
  
    const header = document.createElement('header');
    header.textContent = 'Galería de Imágenes';
    aplicarEstilos(header, {
      background: '#222',
      color: 'white',
      textAlign: 'center',
      padding: '1em',
    });
  
    const main = document.createElement('main');
    aplicarEstilos(main, {
      display: 'flex',
    });
  
    const aside = document.createElement('aside');
    aplicarEstilos(aside, {
      width: '200px',
      background: '#f0f0f0',
      padding: '1em',
    });
  
    const btnRegistro = document.createElement('button');
    btnRegistro.textContent = 'Registrar nueva imagen';
    btnRegistro.onclick = () => location.href = 'register.html';
    aplicarEstilos(btnRegistro, {
      padding: '0.5em',
      fontSize: '1em',
      cursor: 'pointer',
    });
    aside.appendChild(btnRegistro);
  
    const gallery = document.createElement('section');
    aplicarEstilos(gallery, {
      flex: '1',
      padding: '1em',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '1em',
    });
  
    const imagenes = obtenerImagenes();
    imagenes.forEach(({ url, descripcion }) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      aplicarEstilos(item, {
        border: '1px solid #ccc',
        padding: '0.5em',
        background: '#fff',
        borderRadius: '8px',
      });
  
      const img = document.createElement('img');
      img.src = url;
      aplicarEstilos(img, {
        width: '100%',
        borderRadius: '4px',
      });
  
      const p = document.createElement('p');
      p.textContent = descripcion;
  
      item.appendChild(img);
      item.appendChild(p);
      gallery.appendChild(item);
    });
  
    const footer = document.createElement('footer');
    footer.textContent = 'Programación Integrativa de Componentes - Josue Zambrano';
    aplicarEstilos(footer, {
      background: '#222',
      color: 'white',
      textAlign: 'center',
      padding: '1em',
    });
  
    main.appendChild(aside);
    main.appendChild(gallery);
  
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
  };
  
  renderPagina();
  