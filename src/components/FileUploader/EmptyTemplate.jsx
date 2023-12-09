
const EmptyTemplate = () => {
    return (
        <div className="flex align-items-center flex-column">
            <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--primary-color)' }}></i>
            <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                Drag and Drop Image Here
            </span>
        </div>
    );
}

export default EmptyTemplate
