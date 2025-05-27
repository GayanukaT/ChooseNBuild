export default function DashboardLayout({ children }) {
    return (
      <div>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ padding: '1rem', flexGrow: 1 }}>
            {children}
          </main>
        </div>
      </div>
    );
  }
  