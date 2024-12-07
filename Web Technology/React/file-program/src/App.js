import logo from './logo.svg';
import './App.css';
import FileUploader from './FileUploader';
import FileDownloader from './FileDownloader';

function App() {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
<h1>React File Import/Export</h1>
<FileUploader />
<FileDownloader />
</div>
  );
}

export default App;
