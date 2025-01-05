import ReportsHeader from "./_components/reports-header";
import Selectors from "./_components/selectors";

export default function Home() {
    return (
        <main className="@module:mainPage::main">
            <ReportsHeader />
            <Selectors />
            <div>Page Content</div>
        </main>
    );
}
