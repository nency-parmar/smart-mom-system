import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getMeetings } from '@/app/actions/meetings';
import ClientDate from '@/components/ClientDate';
import { logout } from '@/app/actions/auth';

export default async function Home() {
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId');
  const userRole = cookieStore.get('userRole');

  if (!userId || !userRole) {
    redirect('/login');
  }

  if (userRole.value !== 'ADMIN') {
    redirect('/user-dashboard');
  }

  // Fetch real data
  const allMeetings = await getMeetings();

  // Compute stats
  const stats = {
    upcoming: allMeetings.filter(m => new Date(m.MeetingDate) > new Date() && !m.IsCancelled).length,
    completed: allMeetings.filter(m => new Date(m.MeetingDate) <= new Date() && !m.IsCancelled).length,
    cancelled: allMeetings.filter(m => m.IsCancelled).length,
    pendingFollowups: 9, // Mock for now as we don't have followups table
  };

  const today = new Date().toDateString();

  const recentMeetings = allMeetings.slice(0, 5); // top 5

  const accentYellow = '#eab308';
  const primaryBlue = '#1d4ed8';

  return (
    <div className="container py-4 py-md-5">
      {/* Header */}
      <section className="mb-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
          <div>
            <p className="text-uppercase small text-muted mb-1">
              Minutes of Meeting Management
            </p>
            <h1 className="h3 fw-bold text-dark mb-1">Admin Dashboard</h1>
            <p className="text-secondary small mb-0">
              Overview of meetings, attendance, and pending follow-ups.
            </p>
          </div>

          <div className="d-flex flex-column align-items-md-end mt-3 mt-md-0">
            <span className="small text-muted">Today</span>
            <span className="fw-semibold">{today}</span>
            <div className="mt-2 d-flex gap-2">
              <a
                href="/meetings/new"
                className="btn btn-sm text-white"
                style={{
                  backgroundColor: primaryBlue,
                  borderColor: primaryBlue,
                  borderRadius: '8px'
                }}
              >
                + Schedule Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="row g-3 g-md-4 mb-5">
        <div className="col-6 col-md-3">
          <div
            className="card border-0 shadow-sm h-100 p-3"
            style={{
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
              // transition: "transform 0.2s ease, box-shadow 0.2s ease" // CSS transitions best in CSS file
            }}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <p className="text-uppercase small mb-0" style={{ color: "#9ca3af" }}>
                Upcoming
              </p>
              <i
                className="bi bi-calendar3-week-fill"
                style={{ color: primaryBlue, fontSize: '1.5rem' }}
              />
            </div>
            <div className="h2 fw-bold mb-1" style={{ color: primaryBlue }}>
              {stats.upcoming}
            </div>
            <p className="small mb-0" style={{ color: "#cbd5f5" }}>
              Meetings scheduled
            </p>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div
            className="card border-0 shadow-sm h-100 p-3"
            style={{
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
            }}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <p className="text-uppercase small mb-0" style={{ color: "#9ca3af" }}>
                Completed
              </p>
              <i
                className="bi bi-check-circle-fill"
                style={{ color: "#22c55e", fontSize: '1.5rem' }}
              />
            </div>
            <div className="h2 fw-bold mb-1" style={{ color: "#22c55e" }}>
              {stats.completed}
            </div>
            <p className="small mb-0" style={{ color: "#cbd5f5" }}>
              MOM recorded
            </p>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div
            className="card border-0 shadow-sm h-100 p-3"
            style={{
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
            }}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <p className="text-uppercase small mb-0" style={{ color: "#9ca3af" }}>
                Cancelled
              </p>
              <i
                className="bi bi-x-circle-fill"
                style={{ color: "#f97373", fontSize: '1.5rem' }}
              />
            </div>
            <div className="h2 fw-bold mb-1" style={{ color: "#f97373" }}>
              {stats.cancelled}
            </div>
            <p className="small mb-0" style={{ color: "#cbd5f5" }}>
              With reasons
            </p>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div
            className="card border-0 shadow-sm h-100 p-3"
            style={{
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
            }}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <p className="text-uppercase small mb-0" style={{ color: "#9ca3af" }}>
                Pending follow-ups
              </p>
              <i
                className="bi bi-clock-fill"
                style={{ color: accentYellow, fontSize: '1.5rem' }}
              />
            </div>
            <div className="h2 fw-bold mb-1" style={{ color: accentYellow }}>
              {stats.pendingFollowups}
            </div>
            <p className="small mb-0" style={{ color: "#cbd5f5" }}>
              Action items due
            </p>
          </div>
        </div>
      </section>

      <section className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm h-100">
            <div
              className="card-header p-4"
              style={{
                background: "linear-gradient(135deg, #0f172a, #1d4ed8)",
                color: "#e5e7eb"
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="h5 fw-semibold mb-0">
                  <i className="bi bi-file-earmark-text me-2" />Recent Meetings
                </h2>
                <a
                  href="/meetings"
                  className="small text-decoration-none"
                  style={{ color: accentYellow }}
                >
                  View all →
                </a>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover table-sm align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: '40%' }}>Meeting</th>
                      <th style={{ width: '20%' }}>Date & time</th>
                      <th style={{ width: '12%' }}>Type</th>
                      <th style={{ width: '13%' }}>Owner</th>
                      <th style={{ width: '15%' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentMeetings.map((m) => {
                      const owner = m.MeetingMember[0]?.Staff?.StaffName || "Unknown";
                      return (
                        <tr key={m.MeetingID}>
                          <td>
                            <div className="fw-semibold small">{m.MeetingDescription}</div>
                            <div className="text-muted small">MOM-{m.MeetingID}</div>
                          </td>
                          <td className="small text-nowrap"><ClientDate dateString={m.MeetingDate} /></td>
                          <td className="small">
                            <span className="badge bg-light text-dark border rounded-pill px-3 py-1">
                              {m.MeetingType.MeetingTypeName}
                            </span>
                          </td>
                          <td className="small fw-medium">{owner}</td>
                          <td>
                            <span
                              className={
                                "badge rounded-pill px-3 py-2 fw-semibold " +
                                (m.IsCancelled
                                  ? "bg-secondary text-white" // Using secondary for cancelled in this view or keep red?
                                  : new Date(m.MeetingDate) < new Date()
                                    ? "bg-success text-white"
                                    : "bg-primary text-white")
                              }
                            >
                              {m.IsCancelled ? "Cancelled" : (new Date(m.MeetingDate) < new Date() ? "Completed" : "Upcoming")}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-light">
                <p className="text-muted small mb-0">
                  Click 'View all' to manage full meeting details.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          {/* Mock Follow-ups for visual balance, keeping static */}
          <div className="card border-0 shadow-sm mb-4">
            <div
              className="card-header p-3"
              style={{
                background: "linear-gradient(135deg, #0f172a, #1d4ed8)",
                color: "#e5e7eb"
              }}
            >
              <h2 className="h6 fw-semibold mb-0">
                <i className="bi bi-check-square-fill me-2" />Pending Follow-ups
              </h2>
            </div>
            <div className="card-body p-0">
              <div className="p-3 text-center text-muted small">
                Follow-up management module coming soon.
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h2 className="h6 fw-semibold mb-4 pb-2 border-bottom border-secondary-subtle">
                Quick Actions
              </h2>
              <div className="d-grid gap-2">
                <a
                  href="/meetings/new"
                  className="btn text-white py-3 fw-semibold"
                  style={{
                    backgroundColor: primaryBlue,
                    borderColor: primaryBlue,
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(29, 78, 216, 0.25)'
                  }}
                >
                  <i className="bi bi-plus-circle-fill me-2" />
                  Create New Meeting
                </a>
                <a
                  href="/attendance"
                  className="btn py-3 fw-semibold border-2"
                  style={{
                    borderColor: primaryBlue,
                    color: primaryBlue,
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(29, 78, 216, 0.15)'
                  }}
                >
                  <i className="bi bi-people-fill me-2" />
                  Mark Attendance
                </a>
                <a
                  href="/reports/meeting-wise"
                  className="btn btn-outline-secondary py-3 fw-semibold"
                  style={{ borderRadius: '10px' }}
                >
                  <i className="bi bi-file-earmark-bar-graph-fill me-2" />
                  Meeting-wise Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}