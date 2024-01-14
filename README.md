 <div className="slider-container">
        {crew.map((people) => {
          return <Card key={people.id} people={people} />
        })}
      </div>
